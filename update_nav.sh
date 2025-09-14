#!/bin/bash

# 임시 파일 생성
cp index.html index.html.tmp

# sed로 패턴 변경 - 각 페이지마다 수정
for i in {6..67}; do
  # 페이지 번호를 찾아서 box-title 구조로 변경
  sed -i "s|^\t\t\t\t\t\t${i}P \(.*\)$|\t\t\t\t\t\t<div class=\"box-title\">\n\t\t\t\t\t\t\t<span class=\"number\">${i}P</span>\n\t\t\t\t\t\t\t<h3 class=\"title\">\1</h3>\n\t\t\t\t\t\t</div>|" index.html.tmp
done

# 68p도 처리 (소문자 p)
sed -i "s|^\t\t\t\t\t\t68p \(.*\)$|\t\t\t\t\t\t<div class=\"box-title\">\n\t\t\t\t\t\t\t<span class=\"number\">68P</span>\n\t\t\t\t\t\t\t<h3 class=\"title\">\1</h3>\n\t\t\t\t\t\t</div>|" index.html.tmp

# 변경된 파일로 교체
mv index.html.tmp index.html

echo "HTML 구조가 성공적으로 변경되었습니다."
