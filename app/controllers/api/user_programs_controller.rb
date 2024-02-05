class Api::UserProgramsController < ApplicationController
  def index
    @user_programs = UserProgram.all
    render json: @user_programs
  end

  def show
    @user_program = UserProgram.find(params[:id])
    render json: @user_program
  end

  def create
    @user_program = UserProgram.new(user_program_params)
    if @user_program.save
      render json: @user_program, status: :created
    else
      render json: @user_program.errors, status: :unprocessable_entity
    end
  end

  def update
    @user_program = UserProgram.find(params[:id])
    if @user_program.update(user_program_params)
      render json: @user_program
    else
      render json: @user_program.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user_program = UserProgram.find(params[:id])
    @user_program.destroy
  end

  private

  def user_program_params
    params.require(:user_program).permit(:user_id, :program_id, :watching, :favorite)
  end
end
