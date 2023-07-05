class FeedbacksController < ApplicationController
  before_action :set_feedback, only: [:show, :update, :destroy]
  before_action :set_user, only: [:index, :create]

  # GET /feedbacks
  def index
    if @user
      feedbacks = Feedback.all
      render json: feedbacks
    else
      render json: { errors: ["You must be logged in."] }, status: :unauthorized
    end
  end

  # GET /feedbacks/1
  def show
    render json: @recipe
  end

  # POST /feedbacks
  def create
    if @user
      @feedback = @user.feedback.new(feedback_params)

      if @feedback.save
        render json: @feedback, status: :created
      else
        render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { errors: ["You must be logged in."] }, status: :unauthorized
    end
  end

  # PATCH/PUT /feedback/1
  def update
    if @feedback.update(feedback_params)
      render json: @feedback
    else
      render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @feedback.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_feedback
    @feedback = Feedback.find(params[:id])
  end

  def set_user
    @user = User.find_by(id: session[:user_id]) if session[:user_id]
  end

  # Only allow a list of trusted parameters through.
  def feedback_params
    params.permit(:name, :service_usage, :feedback_text)
  end
end
