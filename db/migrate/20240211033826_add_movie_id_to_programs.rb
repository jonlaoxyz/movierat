class AddMovieIdToPrograms < ActiveRecord::Migration[7.1]
  def change
    add_column :programs, :movie_id, :integer
  end
end
