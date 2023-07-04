class BookingsController < ApplicationController
    def create
      booking = Booking.new(booking_params)
      if booking.save
        render json: { message: 'Booking submitted successfully' }, status: :created
      else
        render json: { error: 'Booking submission failed' }, status: :unprocessable_entity
      end
    end
  
    private
  
    def booking_params
      params.permit(:first_name, :last_name, :email, :phone, :check_in_date, :check_out_date, :adults, :children, :trip_preference)
    end
  end

  