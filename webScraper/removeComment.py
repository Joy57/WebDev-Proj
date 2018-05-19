import re
revised_file = open('test1.html','w')
with open('index.html', 'r') as f:
    for line in f:
        data = re.sub(r'\#', "", line)
        revised_file.write(data)

revised_file.close()
        