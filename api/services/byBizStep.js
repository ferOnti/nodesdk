function (doc) {
	if (doc.chaincodeid && doc.chaincodeid == "CHAINCODE_ID") { 
		if (doc.data && doc.data.bizStep && doc.data.assetType == "thing") {
			emit(
				[doc.data.bizStep, doc.data.disposition, doc.data.bizLocation]
				, 1
			); 
		}
	} 
}
