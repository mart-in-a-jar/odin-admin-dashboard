import subprocess

files = ["home", "profile", "messages", "history", "tasks", "communities", "settings", "support", "privacy"]

for file in range(len(files)):
    subprocess.run(["rm", f"{files[file]}.svg"])
