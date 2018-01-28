from flask import Flask, flash, redirect, render_template, request, session, abort, url_for, jsonify , json
from flask_cors import CORS, cross_origin
import MySQLdb
import os
 
app = Flask(__name__)
CORS(app, support_credentials=True)
host = "localhost"
user = "sagar"
password = "abcd1234"
database = "pbs_project"

@app.route('/')
def home():
    if not session.get('logged_in'):
        return jsonify('Status : Not_logged_in')
    else:
        return jsonify('Status : Logged_in')
 
@app.route('/login', methods=['GET', 'POST'])
def do_admin_login():
    if request.method == 'GET':
        return "Not Accessible!"
    elif request.method == 'POST': 
    	db = MySQLdb.connect( host, user, password, database)
    	cursor = db.cursor()
    	count = cursor.execute("Select id from Login where user = %s and password = %s", (request.form['username'], request.form['password']))
    	userid = cursor.fetchall()
    	if count > 0:
        	session['logged_in'] = True
    	else:
        	flash('wrong password!')
    	cursor.close()
    return home()

@app.route('/welcome', methods=['GET'])
def product_select():
	db = MySQLdb.connect(host, user, password, database)
        cursor = db.cursor();
        count = cursor.execute("Select product_id, product_name from product")
	if count > 0 :
        	products = cursor.fetchall()
        cursor.close()
        return jsonify(products)

@app.route('/preengage', methods=['GET', 'POST'])
def pre_questions():
	if request.method == 'GET':
		db = MySQLdb.connect(host, user, password, database)
        	cursor = db.cursor();
            
        	count = cursor.execute("Select question_id, question from prequestions")
		if count > 0 :
        		questions = cursor.fetchall()                
		count = cursor.execute("Select mile_id, milestone from milestone")
		if count > 0 :
                	milestones = cursor.fetchall()
		data = ( questions, milestones)
		cursor.close()
        	return jsonify(data)

@app.route("/logout")
def logout():
    session['logged_in'] = False
    return home()
 
if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run(debug=True,host='0.0.0.0', port=4000)
