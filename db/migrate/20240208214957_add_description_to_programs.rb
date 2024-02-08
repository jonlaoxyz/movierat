class AddDescriptionToPrograms < ActiveRecord::Migration[7.1]
  def change
    add_column :programs, :description, :string
  end
end
