
filename = "data-youtube-v5.json"
f = open(filename,"r")
lines = f.read()
splitted = lines.split("\n")

fout = open("youtube-out.json","w")
fout.write("[")
for line in splitted:
    line+=",\n"
    fout.write(line)
fout.write("]")