# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create(title: 'Es', return_date: 10.days.from_now, user_id: '123')
Book.create(title: 'Es', return_date: 15.days.from_now, user_id: '234')
Book.create(title: 'Es', return_date: 20.days.from_now, user_id: '4567')