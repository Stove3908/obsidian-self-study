---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 0
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  title:
    input: text
    accessorKey: title
    key: title
    id: title
    label: title
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 272
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  tags:
    input: tags
    accessorKey: tags
    key: tags
    id: tags
    label: tags
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 249
    options:
      - { label: "Cpp", value: "Cpp", color: "hsl(189, 95%, 90%)"}
      - { label: "Data_Storage", value: "Data_Storage", color: "hsl(85, 95%, 90%)"}
      - { label: "Game_Programming", value: "Game_Programming", color: "hsl(303, 95%, 90%)"}
      - { label: "Variables", value: "Variables", color: "hsl(206, 95%, 90%)"}
      - { label: "Variable_Types", value: "Variable_Types", color: "hsl(6, 95%, 90%)"}
      - { label: "int", value: "int", color: "hsl(277, 95%, 90%)"}
      - { label: "float", value: "float", color: "hsl(187, 95%, 90%)"}
      - { label: "double", value: "double", color: "hsl(147, 95%, 90%)"}
      - { label: "char", value: "char", color: "hsl(25, 95%, 90%)"}
      - { label: "bool", value: "bool", color: "hsl(186, 95%, 90%)"}
      - { label: "string", value: "string", color: "hsl(290, 95%, 90%)"}
      - { label: "Strong_Typing", value: "Strong_Typing", color: "hsl(83, 95%, 90%)"}
      - { label: "Type_Safety", value: "Type_Safety", color: "hsl(135, 95%, 90%)"}
      - { label: "Complier_Error", value: "Complier_Error", color: "hsl(278, 95%, 90%)"}
      - { label: "Variable_Declaration", value: "Variable_Declaration", color: "hsl(211, 95%, 90%)"}
      - { label: "Syntax", value: "Syntax", color: "hsl(132, 95%, 90%)"}
      - { label: "Variable_Initialization", value: "Variable_Initialization", color: "hsl(79, 95%, 90%)"}
      - { label: "Assignment", value: "Assignment", color: "hsl(198, 95%, 90%)"}
      - { label: "Constants", value: "Constants", color: "hsl(23, 95%, 90%)"}
      - { label: "Immutability", value: "Immutability", color: "hsl(160, 95%, 90%)"}
      - { label: "Uniform_Initialization", value: "Uniform_Initialization", color: "hsl(164, 95%, 90%)"}
      - { label: "List_Initialization", value: "List_Initialization", color: "hsl(82, 95%, 90%)"}
      - { label: "Cpp_11", value: "Cpp_11", color: "hsl(107, 95%, 90%)"}
      - { label: "User-Defined_Types", value: "User-Defined_Types", color: "hsl(43, 95%, 90%)"}
      - { label: "SFML", value: "SFML", color: "hsl(45, 95%, 90%)"}
      - { label: "Classes", value: "Classes", color: "hsl(143, 95%, 90%)"}
      - { label: "Objects", value: "Objects", color: "hsl(356, 95%, 90%)"}
      - { label: "Initialization", value: "Initialization", color: "hsl(253, 95%, 90%)"}
      - { label: "Arithmetic_Operators", value: "Arithmetic_Operators", color: "hsl(164, 95%, 90%)"}
      - { label: "Addition", value: "Addition", color: "hsl(19, 95%, 90%)"}
      - { label: "Subtraction", value: "Subtraction", color: "hsl(333, 95%, 90%)"}
      - { label: "Multiplication", value: "Multiplication", color: "hsl(270, 95%, 90%)"}
      - { label: "Division", value: "Division", color: "hsl(317, 95%, 90%)"}
      - { label: "Modulo", value: "Modulo", color: "hsl(163, 95%, 90%)"}
      - { label: "Expressions", value: "Expressions", color: "hsl(223, 95%, 90%)"}
      - { label: "Operators", value: "Operators", color: "hsl(323, 95%, 90%)"}
      - { label: "Values", value: "Values", color: "hsl(234, 95%, 90%)"}
      - { label: "Decrement", value: "Decrement", color: "hsl(45, 95%, 90%)"}
      - { label: "Increment", value: "Increment", color: "hsl(247, 95%, 90%)"}
      - { label: "Assignment_Operators", value: "Assignment_Operators", color: "hsl(134, 95%, 90%)"}
      - { label: "Add_and_assign", value: "Add_and_assign", color: "hsl(205, 95%, 90%)"}
      - { label: "Subtract_and_assign", value: "Subtract_and_assign", color: "hsl(348, 95%, 90%)"}
      - { label: "Multiply_and_assign", value: "Multiply_and_assign", color: "hsl(71, 95%, 90%)"}
      - { label: "Divide_and_assign", value: "Divide_and_assign", color: "hsl(220, 95%, 90%)"}
      - { label: "Spaceship_Operator", value: "Spaceship_Operator", color: "hsl(352, 95%, 90%)"}
      - { label: "Sprites", value: "Sprites", color: "hsl(105, 95%, 90%)"}
      - { label: "Textures", value: "Textures", color: "hsl(39, 95%, 90%)"}
      - { label: "Game_Development", value: "Game_Development", color: "hsl(153, 95%, 90%)"}
      - { label: "Code_Style", value: "Code_Style", color: "hsl(116, 95%, 90%)"}
      - { label: "Readability", value: "Readability", color: "hsl(89, 95%, 90%)"}
      - { label: "Maintainability", value: "Maintainability", color: "hsl(184, 95%, 90%)"}
      - { label: "Magic_Numbers", value: "Magic_Numbers", color: "hsl(31, 95%, 90%)"}
      - { label: "Animation", value: "Animation", color: "hsl(300, 95%, 90%)"}
      - { label: "Drawing", value: "Drawing", color: "hsl(20, 95%, 90%)"}
      - { label: "Rendering_Order", value: "Rendering_Order", color: "hsl(189, 95%, 90%)"}
      - { label: "Random_Numbers", value: "Random_Numbers", color: "hsl(324, 95%, 90%)"}
      - { label: "srand", value: "srand", color: "hsl(36, 95%, 90%)"}
      - { label: "rand", value: "rand", color: "hsl(184, 95%, 90%)"}
      - { label: "if_Statement", value: "if_Statement", color: "hsl(325, 95%, 90%)"}
      - { label: "else_Statement", value: "else_Statement", color: "hsl(239, 95%, 90%)"}
      - { label: "Conditional_Logic", value: "Conditional_Logic", color: "hsl(353, 95%, 90%)"}
      - { label: "Decision_Making", value: "Decision_Making", color: "hsl(314, 95%, 90%)"}
      - { label: "Logical_Operators", value: "Logical_Operators", color: "hsl(101, 95%, 90%)"}
      - { label: "Equal_to", value: "Equal_to", color: "hsl(263, 95%, 90%)"}
      - { label: "Not_equal_to", value: "Not_equal_to", color: "hsl(119, 95%, 90%)"}
      - { label: "Greater_than", value: "Greater_than", color: "hsl(189, 95%, 90%)"}
      - { label: "Less_than", value: "Less_than", color: "hsl(282, 95%, 90%)"}
      - { label: "Greater_than_or_equal_to", value: "Greater_than_or_equal_to", color: "hsl(32, 95%, 90%)"}
      - { label: "Less_than_or_equal_to", value: "Less_than_or_equal_to", color: "hsl(109, 95%, 90%)"}
      - { label: "Logical_AND", value: "Logical_AND", color: "hsl(191, 95%, 90%)"}
      - { label: "Logical_OR", value: "Logical_OR", color: "hsl(132, 95%, 90%)"}
      - { label: "Logical_NOT", value: "Logical_NOT", color: "hsl(128, 95%, 90%)"}
      - { label: "Nested_if_Statements", value: "Nested_if_Statements", color: "hsl(292, 95%, 90%)"}
      - { label: "Game_Loop", value: "Game_Loop", color: "hsl(105, 95%, 90%)"}
      - { label: "Timing", value: "Timing", color: "hsl(312, 95%, 90%)"}
      - { label: "Frame_Rate", value: "Frame_Rate", color: "hsl(130, 95%, 90%)"}
      - { label: "Clock", value: "Clock", color: "hsl(26, 95%, 90%)"}
      - { label: "Time", value: "Time", color: "hsl(357, 95%, 90%)"}
      - { label: "Delta_Time", value: "Delta_Time", color: "hsl(235, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  source:
    input: text
    accessorKey: source
    key: source
    id: source
    label: source
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 345
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: true
  conditions:
```
