# a = 1
# if a == 1:
#     print (2)
# else:
#     print(5)
# if boolean 타입은 앞글자는 꼭 대문자 "T" "F"
# if True:
#     print('참입니다')
# && 와 || 연산자는 각 한개씩만 써주면된다. 
# if True | False :
#     print('앙')

# 배열 = [1,2,3,4,5]
# print(배열[4])

# 객체 개념은 class로 선언한다
# class 가수:
#     def 장르() :
#         print ('재즈')
#     def 이름() : 
#         print ('정재형')
# 가수.이름()

# def sayHello() : 
#     print('안녕하세요')
# sayHello()

# for i in range(1,5):
#     print(i)


# class Item(BaseModel) :
#     id: int
#     content:str

# items = ['맥북','애플워치','아이폰','에어팟']

# # @app.get('/items')
# # def read_items():
# #     return items
# # 1.Path 요청 : 특정 id를 뽑아줘
# @app.get('items/{id}')
# def read_id_item(id):
#     return items[int(id)]

# # 2.Query 요청
# @app.get('/items')
# def read_items(skip:int=0, limit:int=10):
#     return items[skip:skip+limit]

# # 3.request body 요청은 꼭 post !  
# # post는 값을 업데이트 할때씀 
# @app.post("/items")
# def post_item(item:Item):
#     items.append(item.content)
#     return '성공했습니다'