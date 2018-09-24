import firebase_admin
from firebase_admin import credentials, db, auth
from flask import Flask, request, jsonify
from flask_restful import Resource, Api

# create admin credentials
cred = credentials.Certificate('./wordly-database-firebase-admin-key.json')
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://wordly-database.firebaseio.com'
})

# initialize a database
database = db.reference()

# initialize server app and api
app = Flask(__name__)
api = Api(app)

"""
The following are a list of class definitions that determine
the possible operations done by this server. It also defines 
functions for GET, POST, and other REST API methods. The class
and method definitions comprises the app's API.
"""
# creates a new user
class NewUser(Resource):
    def post(self):
        user_data = request.get_json()
        user = auth.create_user(
            uid = user_data['username'],
            email = user_data['email'],
            email_verified = True,
            password = user_data['password'],
            display_name = user_data['name'],
            #photo_url='http://www.example.com/12345678/photo.png',
            disabled = False)
        if user.uid:
            custom_token = auth.create_custom_token(user_data['username'])
            return {"message": "Successfully created user", "username": user.uid, "token": custom_token.decode("utf-8")}, 201
        else:
            return {"message": "An error occurred"}, 400
            

# log in with username (requires JWT)
class LogIn(Resource):
    def post(self):
        login_data = request.get_json()
        user = auth.get_user(login_data['username'])
        return {"data": user}, 200

class AddPuzzle(Resource):
    def post(self):
        puzzle_data = request.get_json()
        puzzles = database.child('puzzles')
        puzzles.child(puzzle_data['theme']).set(puzzle_data)
        return {"message": "done"}, 201

class GetPuzzle(Resource):
    def post(self):
        puzzle_data = request.get_json()
        puzzle = database.child('puzzles').order_by_key().equal_to(puzzle_data['theme']).get()

        return({"puzzle":puzzle}), 200


        
        
        


class HelloWorld(Resource):
    def get(self):
        return {"greeting": "Hello, world"}
    
    def post(self):
        data = request.get_json()
        return {"you sent": data}, 200

class Numbers(Resource):
    def get(self, num):
        return {"result": num}

api.add_resource(NewUser, '/account/create')
api.add_resource(LogIn, '/account/login')
api.add_resource(GetPuzzle, '/puzzle/get')
api.add_resource(AddPuzzle, '/puzzle/add')
api.add_resource(HelloWorld, '/')
api.add_resource(Numbers, '/number/<int:num>')


if __name__ == '__main__':
    app.run(debug = True)

