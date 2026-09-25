;; contracts/ast_queries/sql_catalog_query.scm
;; Tree-sitter S-expression query: Detects unqualified system.columns reflection queries.
;; LINT-001: Unbounded Upstream Catalog Reflection
;; Severity: FATAL ERROR
;; Subagent: stokes-sql
;;
;; Fires when a SELECT statement queries system.columns or system.tables
;; with a table name filter but WITHOUT a database = currentDatabase() predicate.
;; This allows shard replica tables (r0, r1) to silently expand catalog cardinality.

(select_statement
  (from_clause
    (table_expression
      (table_identifier) @catalog_table
      (#match? @catalog_table "^(system\\.)?(columns|tables)$")))
  (where_clause
    (binary_expression
      left: (column_identifier) @filter_col
      operator: "="
      right: (string_literal) @table_name
      (#match? @filter_col "^(table|name)$"))) @where_predicate
  (#not-has-child? @where_predicate
    (binary_expression
      left: (column_identifier) @db_col
      (#match? @db_col "^database$")))) @unqualified_catalog_violation
