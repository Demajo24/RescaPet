import mysql.connector

try:
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Rocio2024",
        database="petdate2"
    )

    if conn.is_connected():
        print("Conectado a la base de datos")
    else:
        print("No se pudo conectar a la base de datos")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    if conn.is_connected():
        conn.close()
