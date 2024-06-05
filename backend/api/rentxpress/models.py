from django.contrib.auth.models import AbstractUser
from django.db import models
# Custom User Model
class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
# Car Model
class Car(models.Model):
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    brand = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.IntegerField()
    location = models.CharField(max_length=255)
    description = models.TextField()
    price_per_day = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='car_images/', blank=True, null=True)
    def __str__(self):
        return f'{self.brand} {self.model} ({self.year}) - {self.owner}'
# Booking Model
class Booking(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    renter = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    total_cost = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f'Reservation for {self.car} by {self.renter} from {self.start_date} to {self.end_date}'
# Availability Model
class Availability(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    date = models.DateField()
    def __str__(self):
        return f'Availability of {self.car} on {self.date}'
# Location Model
class Location(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)
    def __str__(self):
        return f'{self.name} - {self.city}, {self.state}'
# Additional Models for Extensions
class PaymentMethod(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    card_number = models.CharField(max_length=16)
    expiry_date = models.DateField()
    cardholder_name = models.CharField(max_length=100)
class Rating(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='received_ratings')
    rater = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='given_ratings')
    rating = models.IntegerField()
    comment = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
class VerificationDocument(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    document_type = models.CharField(max_length=50) # e.g., ID, Driver's License
    document_file = models.FileField(upload_to='verification_documents/')
    verified = models.BooleanField(default=False)
class Feature(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    feature = models.CharField(max_length=50) # e.g., Air Conditioning, GPS, Bluetooth
class Insurance(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    provider = models.CharField(max_length=100)
    policy_number = models.CharField(max_length=100)
    expiry_date = models.DateField()
class Maintenance(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    maintenance_type = models.CharField(max_length=100)
    date = models.DateField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    notes = models.TextField(blank=True, null=True)
class BookingStatus(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    status = models.CharField(max_length=50) # e.g., Pending, Confirmed, Cancelled
    last_updated = models.DateTimeField(auto_now=True)
class BookingReview(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    reviewer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.IntegerField() # 1 to 5
    comment = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
class AdditionalInsurance(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    insurance_type = models.CharField(max_length=100)
    provider = models.CharField(max_length=100)
    policy_number = models.CharField(max_length=100)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
class MaintenanceWindow(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField(blank=True, null=True)
class Notification(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)
class Message(models.Model):
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='received_messages')
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, null=True, blank=True)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)


