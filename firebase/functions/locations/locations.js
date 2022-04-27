const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { firestore } = require('firebase-admin')
const region = 'asia-south1'
const functions_reg = functions.region(region)
const db = admin.firestore()
db_ref_l = db.collection('locations')

exports.updateLocation = functions_reg.https.onRequest(async (req, res) => {
  const add = req.body.add
  const del = req.body.delete
  try {
    if (add) {
      let status = await db_ref_l.where("names","array-contains",add).get();
      if(status.size != 0){
        res.status(200).json({"status":0,"msg":"location already exists"});
        return;
      }
      await db_ref_l.doc("qM9vZihNi7luccWml4H9").update({
        "names":firestore.FieldValue.arrayUnion(add)
      });
    }
    if (del) {
      await db_ref_l.doc("qM9vZihNi7luccWml4H9").update({
        "names":firestore.FieldValue.arrayRemove(del)
      })
    }
    res.status(200).json({ status: 1, msg: 'Updation Successful' })
  } catch (error) {
      functions.logger.error(error)
      res.status(500).json({status: 0, msg: "Internal Error"})
  }
})