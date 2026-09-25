;; contracts/ast_queries/proto_repeated_query.scm
;; Tree-sitter S-expression query: Detects unbounded repeated protobuf fields.
;; LINT-003 / INVARIANT_4: Protobuf Cardinality Bound
;; Severity: WARNING
;; Subagent: stokes-proto
;;
;; Fires when a protobuf field is declared with the `repeated` modifier
;; but does NOT include the `stokes.max_items` field option annotation.
;; Unbounded repeated fields allow unlimited payload growth across gRPC boundaries.

(field
  (field_options)? @options
  type: (_) @field_type
  name: (field_name) @field_name
  (#match? @options "repeated")
  (#not-match? @options "stokes\\.max_items")) @unbounded_repeated_field
