class Api::FeedbacksController < ApplicationController
    def create
      feedback = Feedback.new(feedback_params)
      if feedback.save
        render json: { success: true, message: 'Feedback recorded successfully.' }
      else
        render json: { success: false, errors: feedback.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def feedback_params
      params.require(:feedback).permit(:name, :service_usage, :feedback_text)
    end
  end
  