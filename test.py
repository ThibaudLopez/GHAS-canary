# examples 1 & 2
# https://stackabuse.com/checking-vulnerabilities-in-your-python-code-with-bandit/

import subprocess
domain = input("Enter the Domain: ")
output = subprocess.check_output(f"nslookup {domain}", shell=True, encoding='UTF-8')
print(output)

from django.db import connection
def find_user(username):
    with connection.cursor() as cur:
        cur.execute(f"""select username from USERS where name = '%s'""" % username)
        output = cur.fetchone()
    return output


# example 3
# https://rules.sonarsource.com/python/type/Vulnerability

from flask import request
@app.route('/')
def index():
    module = request.args.get("module")
    exec("import urllib%s as urllib" % module) # Noncompliant
