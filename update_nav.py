import re

# 파일 읽기
with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    
    # nav ul 내의 리스트 아이템 패턴 찾기
    if '\t\t\t\t<li>' in line and i + 3 < len(lines):
        next_line = lines[i + 1]
        content_line = lines[i + 2]
        img_line = lines[i + 3]
        
        # navBtn 함수를 포함하는 a 태그인지 확인
        if 'navBtn(' in next_line and '<img src="img/new/' in img_line:
            # 이미 box-title 구조가 있는지 확인
            if '<div class="box-title">' not in content_line:
                # 페이지 번호와 제목 추출
                match = re.match(r'\s*(\d+[Pp])\s+(.+)', content_line.strip())
                if match:
                    page_num = match.group(1)
                    title = match.group(2)
                    
                    # 새 구조로 변경
                    new_lines.append(line)
                    new_lines.append(next_line)
                    new_lines.append('\t\t\t\t\t\t<div class="box-title">\n')
                    new_lines.append(f'\t\t\t\t\t\t\t<span class="number">{page_num}</span>\n')
                    new_lines.append(f'\t\t\t\t\t\t\t<h3 class="title">{title}</h3>\n')
                    new_lines.append('\t\t\t\t\t\t</div>\n')
                    new_lines.append(img_line)
                    i += 4
                    continue
    
    new_lines.append(line)
    i += 1

# 파일 쓰기
with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('HTML 구조가 성공적으로 변경되었습니다.')
