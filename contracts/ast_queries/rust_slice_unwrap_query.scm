;; contracts/ast_queries/rust_slice_unwrap_query.scm
;; Tree-sitter S-expression query: Detects panicking slice-to-array conversions.
;; LINT-004: Fixed Stack Buffer Overflow Hazard
;; Severity: FATAL ERROR
;; Subagent: stokes-rust
;;
;; Fires when a Rust call_expression chains .try_into() followed by .unwrap() or .expect()
;; on a value being converted into a fixed-size stack array [T; N].
;; When upstream cardinality exceeds N, this produces an immediate TryFromSliceError panic,
;; crashing the worker thread and collapsing the epoll event loop.

(call_expression
  function: (field_expression
    value: (call_expression
      function: (field_expression
        value: (_) @source_slice
        field: (field_identifier) @try_into_fn
        (#eq? @try_into_fn "try_into")))
    field: (field_identifier) @unwrap_fn
    (#match? @unwrap_fn "^(unwrap|expect)$"))
  arguments: (arg_list)) @fatal_slice_unwrap_violation
