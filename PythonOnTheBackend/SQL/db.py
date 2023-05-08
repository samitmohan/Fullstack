import mysql.connector
# create channel
con = mysql.connector.connect(host="samit.local",
                              user="root",
                              password="smt#2002",
                              database="samitdb",
                              port=3306
                              )

print("Connected")

# queries : cursor
cur = con.cursor()

# not really physically present in db (need to commit)
cur.execute("insert into employees (id, name) values (120, 'rishabh')")

cur.execute("select id, name from employees")  # executes not fetches

rows = cur.fetchall()

for i in range(100):
    cur.execute("insert into employees (id, name) values (%s, %s)",
                (i + 10, f'Rishabh{i}'))

for r in rows:
    print(f"ID = {r[0]} name = {r[1]}")

# commit (transaction) to HDD
con.commit()

# con.rollback()

cur.close()

con.close()
