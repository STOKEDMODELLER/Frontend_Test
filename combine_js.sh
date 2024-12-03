#!/bin/bash

# Output file
output_file="combined_js.txt"

# Clear the output file if it exists
> "$output_file"

# Find all .js files, excluding node_modules, and append their content to the output file
find . -type f -name "*.js" ! -path "*/node_modules/*" -exec sh -c '
  for file do
    echo "Processing: $file"
    echo -e "\n--- FILE: $file ---\n" >> "$0"
    cat "$file" >> "$0"
  done
' "$output_file" {} +

echo "All .js files have been appended to $output_file (excluding node_modules)."
