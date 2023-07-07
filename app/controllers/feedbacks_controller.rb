class FeedbacksController < ApplicationController
  # before_action :set_feedback, only: [:show, :update, :destroy]
  # skip_action :set_user, only: [:index, :create]

  # GET /feedbacks
  def index
      feedbacks = Feedback.all
      render json: feedbacks
  end

  # GET /feedbacks/1
  def show
    feedback = find_feedback
    render json: feedback
  end

  # POST /feedbacks
  def create
    feedback = Feedback.create(feedback_params)
    render json: feedback, status: :created
  end

  # PATCH/PUT /feedback/1
  def update
    feedback = find_feedback
    feedback.update!(feedback_params)
    render json: feedback
  end

  # DELETE /recipes/1
  def destroy
    destination = find_destination
    destination.destroy
    render json: { success: "Destination was deleted successfully" }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def find_feedback
    Feedback.find(params[:id])
  end

  def set_user
    @user = User.find_by(id: session[:user_id]) if session[:user_id]
  end

  # Only allow a list of trusted parameters through.
  def feedback_params
    params.permit(:name, :service_usage, :feedback_text)
  end
end
