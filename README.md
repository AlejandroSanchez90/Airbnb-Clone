# Airbnb Clone Readme

This is an Airbnb clone application that aims to replicate the main features and functionality of the original Airbnb platform. It is built using a combination of technologies such as React, Next.js, Tailwind CSS, and various other libraries and APIs. The following sections outline the features and provide instructions on how to use and customize the application.

## Demo

You can explore a live demo of the AirBnB web app clone by visiting the following link: [AirBnB Web App Demo](https://portfolio-4-chi.vercel.app/)
Feel free to interact with the demo and test out the available features.

## Features

1. **Tailwind Design**: The application utilizes Tailwind CSS for its design and styling. Tailwind CSS provides a utility-first approach to styling, allowing for easy customization and responsiveness.

2. **Credential Authentication**: The application supports credential authentication (Github and Google), allowing users to create accounts and log in using their email and password.

3. **Image Upload using Cloudinary CDN**: Users can upload property images using the Cloudinary CDN (Content Delivery Network). This ensures efficient storage and delivery of images within the application.

4. **Client Form Validation and Handling using react-hook-form**: The application utilizes the `react-hook-form` library for client-side form validation and handling. This library simplifies the process of validating and submitting forms, enhancing the overall user experience.
   
5. **Calendars with react-date-range**: The application incorporates the `react-date-range` library to provide calendar functionality. This allows users to select date ranges for their property reservations and bookings.

6. **Page Empty State**: In cases where there is no data available to display on a page, the application handles this scenario gracefully by showing an empty state message. This provides a clear indication to users that there is no data to display at the moment.

7. **Booking / Reservation System**: The application includes a booking and reservation system, allowing users to make reservations for available properties. Users can view property details, select dates, and complete the booking process.

8. **Guest Reservation Cancellation**: If a guest needs to cancel a reservation, the application provides the necessary functionality to cancel bookings. This ensures flexibility for users who may need to change their travel plans.

9. **Owner Reservation Cancellation**: Similarly, if a property owner needs to cancel a reservation made by a guest, the application allows for reservation cancellation by the owner. This provides a mechanism for owners to manage their property bookings effectively.

10. **Creation and Deletion of Properties**: Property owners can create new property listings within the application. Additionally, owners have the ability to delete properties they no longer wish to make available for booking.

11. **Pricing Calculation**: The application incorporates a pricing calculation feature that takes into account various factors such as property size, amenities, and location. This ensures accurate pricing for property listings.

12. **Advanced Search Algorithm**: The application implements an advanced search algorithm to provide users with tailored property search results. Users can filter properties based on categories, date ranges, map location, number of guests, rooms, and bathrooms.

13. **Favorites System**: Users can mark properties as favorites, allowing them to easily access and manage their preferred listings. This feature enhances user convenience and facilitates easy access to desired properties.

14. **Shareable URL Filters**: The application supports shareable URL filters, enabling users to share specific property search results with others. When a user selects a category, location, and date range, they can share the URL with a friend who is not logged in, and the friend will be able to view the same search results.

## Technologies Used

- **Front-end**: Typescript, React, Next.js, Tailwind
- **Back-end**: Node.js, MongoDB
- **Authentication**: NextAuth
- **File and Image Upload**: Cloudinary CDN

