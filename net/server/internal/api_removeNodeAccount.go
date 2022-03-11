package databag

import (
  "os"
  "errors"
  "strconv"
  "gorm.io/gorm"
	"net/http"
  "databag/internal/store"
  "github.com/gorilla/mux"
)

func RemoveNodeAccount(w http.ResponseWriter, r *http.Request) {

  // get referenced account id
  params := mux.Vars(r)
  accountId, res := strconv.ParseUint(params["accountId"], 10, 32)
  if res != nil {
    ErrResponse(w, http.StatusBadRequest, res)
    return
  }

  if err := AdminLogin(r); err != nil {
    ErrResponse(w, http.StatusUnauthorized, err)
    return
  }

  var account store.Account
  if err := store.DB.First(&account, accountId).Error; err != nil {
    if errors.Is(err, gorm.ErrRecordNotFound) {
      ErrResponse(w, http.StatusNotFound, err)
    } else {
      ErrResponse(w, http.StatusInternalServerError, err)
    }
    return
  }

  err := store.DB.Transaction(func(tx *gorm.DB) error {
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Tag{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.TagSlot{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Asset{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Topic{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.TopicSlot{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.ChannelSlot{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Channel{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Article{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.ArticleSlot{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.CardSlot{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Card{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Group{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.GroupData{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.Group{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.App{}).Error; res != nil {
      return res
    }
    if res := tx.Where("account_id = ?", account.ID).Delete(&store.AccountToken{}).Error; res != nil {
      return res
    }
    if res := tx.Delete(&store.AccountDetail{}, account.AccountDetailID).Error; res != nil {
      return res
    }
    if res := tx.Delete(account).Error; res != nil {
      return res
    }
    return nil
  })
  if err != nil {
    ErrResponse(w, http.StatusInternalServerError, err)
    return
  }

  // delete asset files
  path := getStrConfigValue(CONFIG_ASSETPATH, APP_DEFAULTPATH) + "/" + account.Guid
  if err = os.RemoveAll(path); err != nil {
    ErrMsg(err)
  }

  WriteResponse(w, nil)
}

