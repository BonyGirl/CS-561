from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017/')
db = client['lab3']
todoItems = db['todoItems']

def addData(data):
    todoItems.insert_one(data)

def getAllData():
    return todoItems.find()
    # return todoItems.find_one({"author" : "Mike" })

def getAllDataNumber():
    return todoItems.find().count()

def find_one(self,dataId):
    if todoItems.find_one({"id_str":dataId}) is None:
        return False
    return True

def testdata():
    post = {"author": "Mike","text": "My first blog post!","tags": ["mongodb", "python", "pymongo"],"date": "lalalal"}
    post_id = todoItems.insert_one(post).inserted_id
    print post_id

def removeAllData():
    todoItems.remove()

if __name__ == '__main__':
    # for a in getAllData():
    #     print a
    removeAllData()
    