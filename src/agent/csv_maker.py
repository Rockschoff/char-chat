import re
import csv
import os
import pandas as pd

file_path = "char-chat/src/agent/sample.txt"



with open(file_path , "r") as file:
    file_content = file.read()

start = []
for i in range(len(file_content)-len("```json")):
    if file_content[i : i + len("```json")] == "```json":
        start.append(i+len("```json"))

end = []
for i in range(len(file_content)-3):
    if file_content[i : i + len("```json")] != "```json":
        if file_content[i : i + len("```")] == "```":
            end.append(i)

m=[]
print(len(start) , len(end))
for i in range(len(end)):
    m.append(file_content[start[i] : end[i]])

print( "itthe", len(m))




pattern = r"`json(.*?)`"

matches = re.findall(pattern , file_content)


csv_file = "dataset.csv"

with open(csv_file , "w") as csvfile:
    print(matches , len(file_content))
    csvwriter = csv.writer(csvfile)
    for match in matches:
        print(match)
        csvwriter.writerow(match)

csv_file = "dataset2.csv"

df = pd.DataFrame(m , columns=["data"])
df.to_csv(csv_file)
