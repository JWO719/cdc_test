class LendingsController < ApplicationController
  before_action :set_lending, only: [:show, :edit, :update, :destroy]

  # GET /lendings
  # GET /lendings.json
  def index
    userId = request.headers['user-id']
    @lendings = Book.where(:user_id => userId)
  end

  # GET /lendings/1
  # GET /lendings/1.json
  def show
  end

  # GET /lendings/new
  def new
    @lending = Book.new
  end

  # GET /lendings/1/edit
  def edit
  end

  # POST /lendings
  # POST /lendings.json
  def create
    @lending = Book.new(lending_params)
    @lending.user_id ||= request.headers['user-id']

    respond_to do |format|
      if @lending.save
        format.html { redirect_to @lending, notice: 'Lending was successfully created.' }
        format.json { render :show, status: :created, location: lending_url(@lending) }
      else
        format.html { render :new }
        format.json { render json: @lending.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lendings/1
  # PATCH/PUT /lendings/1.json
  def update
    respond_to do |format|
      if @lending.update(lending_params)
        format.html { redirect_to @lending, notice: 'Lending was successfully updated.' }
        format.json { render :show, status: :ok, location: lending_url(@lending)}
      else
        format.html { render :edit }
        format.json { render json: @lending.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lendings/1
  # DELETE /lendings/1.json
  def destroy
    @lending.destroy
    respond_to do |format|
      format.html { redirect_to lendings_url, notice: 'Lending was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lending
      @user_id = request.headers['user-id']
      return render :json => {}, :status => 403 if @user_id.blank?
      @lending = Book.find_by(id: params[:id], user_id: @user_id )
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def lending_params
      puts params
      params.require(:lending).permit(:title, :return_date, :id, :created_at, :updated_at, :user_id)
    end
end
