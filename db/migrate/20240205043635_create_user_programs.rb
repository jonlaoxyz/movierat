class CreateUserPrograms < ActiveRecord::Migration[7.1]
  def change
    create_table :user_programs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :program, null: false, foreign_key: true
      t.boolean :watching
      t.boolean :favorite

      t.timestamps
    end
  end
end
