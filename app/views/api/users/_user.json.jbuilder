json.extract! user, :id, :email, :first_name, :last_name
json.photo_url url_for(@user.image)