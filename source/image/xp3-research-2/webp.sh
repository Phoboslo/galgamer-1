#!/usr/bin/env bash
# 遍歷當前目錄下的所有圖片文件
for img in *.png *.jpg *.jpeg; do
  # 使用 cwebp 工具把圖片轉換成 webp 格式，質量設置為 75
  cwebp -q 75 "$img" -o "${img%.*}.webp"
  # 如果轉換後的 webp 文件比原始文件小，則刪除原始文件
  if [ $(stat -c%s "$img") -gt $(stat -c%s "${img%.*}.webp") ]; then
    rm -f "$img"
  fi
done
