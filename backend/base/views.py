from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import File, Book
from .serializers import BookSerializer
import pandas as pd

@api_view(['GET'])
def getData(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

def create_db(file_path):
    df = pd.read_csv(file_path, delimiter=",")
    list_of_csv = [list(row) for row in df.values]
    for l in list_of_csv:
        Book.objects.create(
            name=l[0],
            authors=l[1],
            user_ratings=l[2],
            reviews=l[3],
            price=l[4],
            year=l[5],
            genre=l[6],
        )    

@api_view(['POST'])
def uploadCSV(request):
    file = request.FILES['file']
    obj = File.objects.create(file=file)
    create_db(obj.file)
    return Response("file upload successful")
