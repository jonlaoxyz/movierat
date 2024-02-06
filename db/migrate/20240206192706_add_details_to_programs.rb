class AddDetailsToPrograms < ActiveRecord::Migration[7.1]
  def change
    add_column :programs, :runtime, :string
    add_column :programs, :genres, :string
    add_column :programs, :release_date, :date
    add_column :programs, :status, :string
    add_column :programs, :tagline, :string
  end
end
