;; contracts/ast_queries/python_extractor_query.scm
;; Tree-sitter S-expression query: Detects unmapped feature extraction loops.
;; LINT-002: Dynamic Memory Dict Allocation on Edge Path
;; Severity: FATAL ERROR
;; Subagent: stokes-python
;;
;; Fires when a function named resolve_feature_cardinality or extract_features
;; contains a for-loop with an else-clause appending dicts with priority=0,
;; indicating shadow/unmapped column admission without a capacity ceiling guard.

(function_definition
  name: (identifier) @fn_name
  (#match? @fn_name "resolve_feature_cardinality|extract_features")
  body: (block
    (for_statement
      left: (identifier) @item_var
      right: (identifier) @collection_var
      body: (block
        (if_statement
          alternative: (else_clause
            (expression_statement
              (call
                function: (attribute
                  object: (identifier) @target_list
                  attribute: (identifier) @append_method
                  (#eq? @append_method "append"))
                arguments: (argument_list
                  (dictionary
                    (pair
                      key: (string) @prio_key
                      value: (integer) @prio_val
                      (#match? @prio_key "priority")
                      (#eq? @prio_val "0")))))))))))) @unbounded_shadow_admission
