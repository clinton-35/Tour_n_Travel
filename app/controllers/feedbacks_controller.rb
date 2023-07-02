class FeedbacksController < ApplicationController
    before_action :set_feedback, only: [:show, :edit, :update, :destroy]
  
    def index
      @feedbacks = Feedback.all
      render json: @feedbacks
    end
  
    def create
      @feedback = Feedback.new(feedback_params)
  
      if @feedback.save
        render json: @feedback, status: :created
      else
        render json: @feedback.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def set_feedback
      @feedback = Feedback.find(params[:id])
    end
  
    def feedback_params
      params.require(:feedback).permit(:name, :service_usage, :feedback_text)
    end
  end
  