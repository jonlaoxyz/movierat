class AddWatchedToPrograms < ActiveRecord::Migration[7.1]
  def change
    add_column :programs, :watched, :boolean, default: false
  end
end
