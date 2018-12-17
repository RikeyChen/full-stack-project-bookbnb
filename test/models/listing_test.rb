# == Schema Information
#
# Table name: listings
#
#  id             :bigint(8)        not null, primary key
#  name           :string           not null
#  host_id        :integer          not null
#  description    :text             not null
#  price          :integer          not null
#  num_bedrooms   :integer          not null
#  max_guests     :integer          not null
#  num_beds       :integer          not null
#  num_bathrooms  :float            not null
#  kitchen        :boolean          default(FALSE), not null
#  heating        :boolean          default(FALSE), not null
#  wifi           :boolean          default(FALSE), not null
#  pets           :boolean          default(FALSE), not null
#  parking        :boolean          default(FALSE), not null
#  tv             :boolean          default(FALSE), not null
#  street_address :string           not null
#  city           :string           not null
#  zip_code       :string           not null
#  country        :string           not null
#  lat            :decimal(, )      not null
#  lng            :decimal(, )      not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  home_type      :string
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
