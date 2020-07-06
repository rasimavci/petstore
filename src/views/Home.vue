<template>
  <div class="istatistik">
    <div>
      <container class="gen-container">
       <div class="user__list-offer">
          <div class="report">
            <div class="report__top">
              <div class="report-left">
                <p class="report__title">RESPONSE</p>
                <p class="report__text">Response status and status text</p>
                <p class="report-detail__number">{{status}} {{statusText}}</p>
              </div>
            </div>
            <div class="report__bottom">
              <div class="report__bottom-item">
                <div class="report-icon" v-on:click="addPet()">
                 <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                </div>
                <div class="report-detail">
                   <p class="report-detail__text">Pet Ekle</p>
                  <input placeholder="id" v-model="petIDNew"/>
                  <label for="phone" v-if="emptyID" class="myValidationText">Bu kısım boş geçilemez!</label>
                  <input placeholder="isim" v-model="petName"/>
                  <input placeholder="kategori" v-model="petCategory"/>
                </div>
               </div>
               <div class="report__bottom-item">
                <div class="report-icon" style="background-color: #ff7676" v-on:click="deletePet()">
                 <span class="oclcok">
                    <svg-icon type="icon-mail"/>
                  </span>
                </div>
                <div class="report-detail">
                  <p class="report-detail__text">Pet Sil</p>
                  <input placeholder="pet ID" v-model="petIDDelete"/>
                  <label for="phone" v-if="emptyIDDelete" class="myValidationText">Bu kısım boş geçilemez!</label>
                </div>
              </div>
              <div class="report__bottom-item">
                <div class="report-icon" style="background-color: #3dc6a7" v-on:click="getPet()">
                 <span class="oclcok">
                    <svg-icon type="icon-headphone"/>
                  </span>
                </div>
                <div class="report-detail" >
                  <p class="report-detail__text">Pet Getir</p>
                  <input placeholder="id" v-model="petID"/>
                  <p class="report-detail__number">{{petData.id}}</p>
                  <p class="report-detail__number">{{petData.name}}</p>
                  <p class="report-detail__number">{{petData.category.name}}</p>
                  <p class="report-detail__number">{{petData.status}}</p>
                </div>
              </div>

              <div class="report__bottom-item">
                <div class="report-icon" style="background-color: #3dc6a7" v-on:click="updatePet()">
                 <span class="oclcok">
                    <svg-icon type="icon-headphone"/>
                  </span>
                </div>
                <div class="report-detail" >
                  <p class="report-detail__text">Pet Güncelle</p>
                  <input placeholder="id" v-model="petIDUpdate"/>
                  <label for="phone" v-if="emptyIDUpdate" class="myValidationText">Bu kısım boş geçilemez!</label>
                  <input placeholder="isim" v-model="petNameUpdate"/>
                  <input placeholder="kategori" v-model="petCategoryUpdate"/>
                </div>
              </div>

             </div>
          </div>

              <div class="report__bottom-item">
                <div class="report-icon" style="background-color: #3dc6a7" v-on:click="getPetTest()">
                 <span class="oclcok">
                    <svg-icon type="icon-headphone"/>
                  </span>
                </div>
                <div class="report-detail" >
                  <p class="report-detail__text">Pet Test</p>
                  <input placeholder="id" v-model="petIDTest"/>
                  <label for="phone" v-if="emptyIDTest" class="myValidationText">Bu kısım boş geçilemez!</label>
                  <label for="phone" class="myValidationText">Aşağıdaki değerlerle test et</label>
                  <input placeholder="isim" v-model="petNameTest"/>
                  <input placeholder="kategori" v-model="petCategoryTest"/>
                  <p class="report-detail__number">{{petData.id}}</p>
                  <p class="report-detail__number">{{petData.name}}</p>
                  <p class="report-detail__number">{{petData.category.name}}</p>
                  <p class="report-detail__number">{{petData.status}}</p>
                </div>
              </div>

        </div>
      </container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { expect } from 'chai'
export default {
  name: 'Home',
  data () {
    return {
      status: null,
      statusText: null,
      petData: {
        category: { name: '' }
      },
      petIDNew: null,
      petIDDelete: null,
      petIDUpdate: null,
      petName: null,
      petCategory: null,
      petID: null,
      emptyID: false,
      emptyIDUpdate: false,
      emptyIDDelete: false,
      emptyIDGet: false,
      emptyIDTest: false,
      petIDTest: null,
      petNameTest: null,
      petCategoryTest: null,
      petIDUpdate: null,
      petNameUpdate: null,
      petCategoryUpdate: null,      
      errors: []
    }
  },
  methods: {
    Test (opt) {
    },
    async getPetTest () {
      this.petData = { category: {} }
      this.status = ''
      try {
        let response = await axios.get(`/pet/${this.petIDTest}`)
        expect(response.status).to.equal(200)
        expect(response.statusText).to.equal('OK')
        expect(response.data.name).to.equal(this.petNameTest)
        expect(response.data.category.name).to.equal(this.petCategoryTest)
        this.petData = response.data
        this.statusText = response.statusText
        this.status = response.status
        console.log('resp status ' + response.status)
      } catch (ex) {
        console.log(ex)
      }
    },
    getPet (opt) {
      let self = this
      this.status = ''
      this.statusText = ''
      this.petData = { category: {} }
      axios.get(`/pet/${self.petID}`)
        .then(response => {
          self.petData = response.data
          this.statusText = response.statusText
          this.status = response.status          
        })
        .catch(e => {
          self.statusText = 'No Response !'
          this.errors.push(e)
        })
    },
    deletePet2 (opt) {
      let self = this
      this.status = ''
      this.statusText = ''
      this.emptyIDDelete = false
      if (!this.petIDDelete) {
        this.emptyIDDelete = true
      } else {
        axios.delete(`/pet/${self.petIDDelete}`)
          .then(response => {
            self.statusText = response.statusText
            self.status = response.status
          })
          .catch(e => {
            self.statusText = 'No Response !'
            this.errors.push(e)
          })
      }
    },
    async deletePet () {
      this.status = ''
      this.statusText = ''
      try {
        // const response = await this.getContacts()
        let response = await axios.delete(`/pet/${this.petIDDelete}`)
        expect(response.status).to.equal(200)
        expect(response.statusText).to.equal('OK')
        this.statusText = response.statusText
        this.status = response.status
        //   expect(response.data.name).to.equal('deneme')
        //   this.petData = response.data
        //   this.statusText = response.statusText
        //   this.status = response.status
        console.log('delete resp status ' + response.status)
        // expect(response.status =).to.have.status(200)
        // this.$store.commit("setContacts", response.data)
      } catch (ex) {
        console.log(ex)
      }
    },
    addPet (opt) {
      var self = this
      self.status = ''
      var petData = {
        id: self.petIDNew,
        category: {
          id: 1,
          name: self.petCategory
        },
        name: self.petName,
        photoUrls: [],
        tags: [
          {
            id: 0,
            name: ''
          }
        ],
        status: 'available'
      }
      this.emptyID = false
      if (!this.petIDNew) {
        this.emptyID = true
      } else {
        axios.post('/pet/', petData)
          .then(response => {
            if (response.status === 200 || response.status === 201) {
              self.statusText = response.statusText
              self.status = response.status
              console.log('pet added')
            } else {
              console.log('pet failed to add')
            }
          })
          .catch(e => {
            self.messageEnabled = true
            this.errors.push(e)
          })
      }
    },
    updatePet (opt) {
      var self = this
      self.status = ''
      self.statusText = ''
      var petData = {
        id: self.petIDUpdate,
        category: {
          id: 1,
          name: self.petCategoryUpdate
        },
        name: self.petNameUpdate,
        photoUrls: [],
        tags: [
          {
            id: 0,
            name: 'dene'
          }
        ],
        status: 'available'
      }
      this.emptyIDUpdate = false
      if (!this.petIDUpdate) {
        this.emptyIDUpdate = true
      } else {
        axios.put('/pet/', petData)
          .then(response => {
            if (response.status === 200 || response.status === 201) {
              self.statusText = response.statusText
              self.status = response.status
              console.log('pet added')
            } else {
              console.log('pet failed to add')
            }
          })
          .catch(e => {
            self.messageEnabled = true
            this.errors.push(e)
          })
      }
    }
  }
}
</script>

<style lang="scss">

  .istatistik {
    .dorm-account-wrp{
      width: 100%;
    }
    .gen-container{
      flex-direction: column;
    }

    .select__placeholder{
      font-size: 16px;
      font-weight: 100;
    }

    .select__caret{
      background-color: #f5f8fc;
      width: 28px;
      height: 28px;
      font-size:10px;
    }
    .user-settings__profil {
      width: 100%;

    }
    .select-box {
      border-bottom: 0 !important;
    }

    .user-settings__top{
      border-bottom: 1px solid #cbd0dd6b;
    }

    .user-settings__profil{
      display: flex;
      justify-content: space-between;
      .left-one{
        display: flex;
        align-items: center;
      }
    }
    .user-settings__profil-img {
      width: 100%;
      border: 3px solid white;
      border-radius: 10px;
      background-color: white;
      padding: 13px;
      box-shadow: 0px 8px 60px 0px rgba(62, 62, 141, 0.05);
    }
    .user-settings__profil-mail {
      margin-right: 102px;
      color: #656e8d;
      font-size: 19px;
      font-weight: bold;
    }
    .user-settings__profil-name.mail {
      font-size: 16px;
      padding-right: 35px;
      .sign-out{
        margin-left: 16px;
        font-size: 24px;
        font-weight: bold;
      }

    }

    .container2 {
      display: block;
      position: relative;
      padding-bottom: 8px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 48%;
      margin-right: 16px;
    }

    .container2 input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      left: 6px;
      height: 14px;
      width: 14px;
      border-radius: 3px;
      background-color: #eff3fb;
      border: 1px solid #d8d8d8;
    }

    /* On mouse-over, add a grey background color */
    .container2:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container2 input:checked ~ .checkmark {
      background-color: #15d2a3;
      border-color: #15d2a3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .container2 input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .container2 .checkmark:after {
      left: 4px;
      top: 1px;
      width: 5px;
      height: 9px;
      border: 1px solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .covid-statistic {
      margin-top: 20px;

      .statistic {
        &-top {
          display: flex;
          justify-content: space-between;
        }

        &__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: white;
          padding: 31px 0px;
          border-radius: 14px;
          box-shadow: 0px 8px 60px 0px rgba(62, 62, 141, 0.05);
          position: relative;
          width: 25%;
          margin-right: 17px;

          &:last-child {
            margin-right: 0;
          }

          &-title {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            padding: 22px 0 11px 0px;
            font-size: 16px;
            font-weight: bold;
            border-bottom: 1px solid #f9f9f9;
            color: #4b5da1;
          }

          &-middle {
            text-align: center;
            margin-top: 21px;
            margin-bottom: 11px;
          }

          &-text {
            position: relative;
            top: -21px;
          }

          &-number {
            font-size: 60px;
          }

          &-days {
            position: absolute;
            bottom: 11px;
            left: 0;
            width: 100%;
            text-align: center;
            border-top: 1px solid #f9f9f9;
            padding: 12px 0 0px 0;
            color: #a1a7be;
            font-size: 16px;
            margin-left: 3px;

            .oclcok {
              position: relative;
              top: -2px;
              font-size: 15px;
              color: #4face2;
              position: relative;
              left: -5px;
            }
          }
        }
      }
    }

    .mycursor {
      cursor: pointer;
    }
    .report {
      background-color: white;
      border-radius: 9px;
      margin-top: 29px;
      padding: 20px 28px;
      box-shadow: 0px 8px 60px 0px rgba(62, 62, 141, 0.05);
      &__top {
        display: flex;
        align-items: center;
      }

      &-right {
        width: 30%;
        margin-left: 0;
        display: flex;
        &__item {
          width: 50%;
        }
      }

      &__title {
        color: #4b5da1;
        font-weight: bold;
        font-size: 16px;
      }

      &__text {
        color: #a1a7be;
        font-size: 16px;
      }

      &__bottom {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid whitesmoke;
        padding: 20px 0;
        margin: 15px 0;
        &-item {
          display: flex;
          width: 24%;
          background-color: #f5f8fc;
          align-items: center;
          justify-content: space-evenly;
          padding: 15px 0;
          border-radius: 8px;

        }
      }

      &-icon {
        color: white;
        background-color: #62b2eb;
        padding: 11px 15px;
        border-radius: 100%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        cursor: pointer;

        .oclcok {
          position: relative;
          left: 0px;
        }
      }

      &-detail {
        &__number {
          color: #62b2eb;
          font-weight: bold;
        }

        &__text {
          color: #a1a7be;
          font-size: 15px;
          position: relative;
          margin-top: -9px;
        }
      }

    }
  }
  .mywidth {
    width: 130%;
            margin-left: 0;
  }

</style>
