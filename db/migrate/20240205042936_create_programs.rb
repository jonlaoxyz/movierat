class CreatePrograms < ActiveRecord::Migration[7.1]
  def change
    create_table :programs do |t|
      t.string :title
      t.string :poster_image_url
      t.float :rating

      t.timestamps
    end
  end
end
