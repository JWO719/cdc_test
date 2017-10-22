class AlterBooks < ActiveRecord::Migration[5.1]
  def change
    change_table :books do |t|
      t.string :title
      t.date :return_date
      t.string :user_id
    end
  end
end
