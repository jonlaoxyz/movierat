class AddFavColumnToPrograms < ActiveRecord::Migration[7.1]
  def change
    add_column :programs, :fav, :boolean, default: false
  end
end
