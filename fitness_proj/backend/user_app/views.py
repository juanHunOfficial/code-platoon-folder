from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_204_NO_CONTENT
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from .models import User
from tracker_app.serializers import TrackerSerializer

# Create your views here.
class TokenReq(APIView):
    authentication_classes= [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
class SignUp(APIView):
    
    def post(self, request):
        data = request.data.copy()
        
        data["username"] = request.data["email"]
        new_user = User.objects.create_user(**data)
        token = Token.objects.create(user=new_user)
        return Response({'email' : new_user.email, 'token': token.key, 'firstname': new_user.firstname, 'age': new_user.age, 'id': new_user.id}, status=HTTP_201_CREATED)
    
class LogIn(APIView):
    
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        current_user = authenticate(username=email, password=password)
        if current_user:
            token, created = Token.objects.get_or_create(user=current_user)
            return Response({"token" : token.key, "email": current_user.email, "firstname" : current_user.firstname, 'id': current_user.id})
        else:
            return Response("None of our clients match those credentials.")
        
class Info(TokenReq):
    
    def get(self, request):
        trackers = request.user.users.all()  
        tracker_data = TrackerSerializer(trackers, many=True).data
        return Response({'firstname':request.user.firstname, 'id': request.user.id, 'trackers': tracker_data})
    
class LogOut(TokenReq):
    
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_204_NO_CONTENT)