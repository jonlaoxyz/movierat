class Api::ProgramsController < ApplicationController
  # GET /api/programs
  def index
    @programs = Program.all
    render json: @programs
  end

  # GET /api/programs/:id
  def show
    @program = Program.find(params[:id])
    render json: @program
  end

  # POST /api/programs
  def create
    @program = Program.new(program_params)
    if @program.save
      render json: @program, status: :created
    else
      render json: @program.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/programs/:id
  def update
    @program = Program.find(params[:id])
    if @program.update(program_params)
      render json: @program
    else
      render json: @program.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/programs/:id
  def destroy
    @program = Program.find(params[:id])
    @program.destroy
  end

  private

  def program_params
    params.require(:program).permit(:title, :poster_image_url, :rating)
  end
end
