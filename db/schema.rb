# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_11_200715) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fav_movies", force: :cascade do |t|
    t.string "title"
    t.string "poster_image_url"
    t.float "rating"
    t.integer "runtime"
    t.string "genres"
    t.date "release_date"
    t.string "status"
    t.string "tagline"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "programs", force: :cascade do |t|
    t.string "title"
    t.string "poster_image_url"
    t.float "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "runtime"
    t.string "genres"
    t.date "release_date"
    t.string "status"
    t.string "tagline"
    t.string "description"
    t.boolean "fav", default: false
    t.integer "movie_id"
    t.boolean "watched", default: false
  end

  create_table "user_programs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "program_id", null: false
    t.boolean "watching"
    t.boolean "favorite"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["program_id"], name: "index_user_programs_on_program_id"
    t.index ["user_id"], name: "index_user_programs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_programs", "programs"
  add_foreign_key "user_programs", "users"
end
