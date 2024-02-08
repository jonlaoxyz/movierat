class Program < ApplicationRecord
  has_many :user_programs
  has_many :users, through: :user_programs
  attribute :overview, :string

  before_save :set_description_from_overview

  private

  def set_description_from_overview
    self.description = overview
  end
end
