class Api::ProgramsController < ApplicationController
  before_action :set_program, only: [:show, :update, :destroy]

  # Controller action to update the favorite status of a program
  def update_fav
    program = Program.find(params[:id])
    # Assuming you have a column named `fav` in your programs table
    program.update(fav: params[:fav])

    render json: program # You can customize the response as per your requirements
  end

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
  if @program.update(fav: params[:fav])
    render json: @program
  else
    render json: { errors: @program.errors.full_messages }, status: :unprocessable_entity
  end
end


  # DELETE /api/programs/:id
  def destroy
    @program.destroy
  end
  
  # GET /api/programs/favorites
  def favorites
    @favorite_programs = Program.where(fav: true)
    render json: @favorite_programs
  end

  private

  
  # Use callbacks to share common setup or constraints between actions.
  def set_program
    @program = Program.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def program_params
    params.require(:program).permit(:title, :poster_image_url, :rating, :runtime, :genres, :release_date, :status, :tagline, :overview, :fav, :movie_id)
  end
end