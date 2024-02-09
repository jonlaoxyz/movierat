class Api::ProgramsController < ApplicationController
  before_action :set_program, only: [:show, :update, :destroy]

  # GET /api/programs
  def index
    @programs = Program.all
    render json: @programs
  end

  # GET /api/programs/:id
  def show
    render json: @program
  end

  # POST /api/programs
  def create
    @program = Program.new(program_params)
    if @program.save
      render json: @program, status: :created
    else
      render json: { errors: @program.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/programs/:id
  def update
    if @program.update(program_params)
      render json: @program
    else
      render json: { errors: @program.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /api/programs/:id
  def destroy
    @program.destroy
  end

  private

  
  # Use callbacks to share common setup or constraints between actions.
  def set_program
    @program = Program.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def program_params
    params.require(:program).permit(:title, :poster_image_url, :rating, :runtime, :genres, :release_date, :status, :tagline, :overview)
  end
end