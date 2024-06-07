from django.contrib import admin
from .models import CustomUser

# Register your models here.
from .models import CustomUser, Car, Booking, Availability, Location, PaymentMethod, Rating, VerificationDocument, Feature, Insurance, Maintenance, BookingStatus, BookingReview, AdditionalInsurance, MaintenanceWindow, Notification, Message

admin.site.register(CustomUser)
admin.site.register(Car)
admin.site.register(Booking)
admin.site.register(Availability)
admin.site.register(Location)
admin.site.register(PaymentMethod)
admin.site.register(Rating)
admin.site.register(VerificationDocument)
admin.site.register(Feature)
admin.site.register(Insurance)
admin.site.register(Maintenance)
admin.site.register(BookingStatus)
admin.site.register(BookingReview)
admin.site.register(AdditionalInsurance)
admin.site.register(MaintenanceWindow)
admin.site.register(Notification)
admin.site.register(Message)
