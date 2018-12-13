class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name, null: false;
      t.integer :host_id, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.integer :num_bedrooms, null: false
      t.integer :max_guests, null: false
      t.integer :num_beds, null: false
      t.float :num_bathrooms, null: false
      t.boolean :kitchen, null: false, default: false
      t.boolean :heating, null: false, default: false
      t.boolean :wifi, null: false, default: false
      t.boolean :pets, null: false, default: false
      t.boolean :parking, null: false, default: false
      t.boolean :tv, null: false, default: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :zip_code, null: false
      t.string :country, null: false
      t.decimal :lat, null: false
      t.decimal :lng, null: false
      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :city
    add_index :listings, :zip_code
    add_index :listings, :country
  end
end
