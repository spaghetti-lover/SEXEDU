// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
    hackerCard : {
      description : "Cháu ơi! Bố mẹ cháu nhờ chú đến đón cháu về. Chú cháu mình cùng về nhé! Chú sẽ mua cho cháu đồ chơi.",
      power : 4,
    },
    playerCards : [
      {
        description : "Cháu không bao giờ đi theo người lạ!",
        power : 5,
      },
      {
        description : "Được ạ! Miễn là chú mua cho cháu đồ chơi",
        power : 2,
      },
      {
        description : "Được ạ, Đi thôi!",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Bạn nghĩ sao về việc chia sẻ hình ảnh riêng tư của mình trên internet với người mà bạn chưa từng gặp?",
      power : 3,
    },
    playerCards : [
      {
        description : "Tôi tin rằng việc chia sẻ hình ảnh riêng tư trực tuyến có thể gây nguy hiểm và tôi sẽ không làm điều đó.",
        power : 5,
      },
      {
        description : "Có lẽ tùy vào tình huống, nhưng tôi sẽ cân nhắc kỹ lưỡng trước khi làm điều đó.",
        power : 4,
      },
      {
        description : "Nếu họ không có ý định xấu, thì chia sẻ hình ảnh cũng không có vấn đề gì.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Bạn nghĩ sao về việc sử dụng từ ngữ khi trò chuyện trực tuyến với người mà bạn không biết?",
      power : 3,
    },
    playerCards : [
      {
        description : "Tôi luôn cẩn thận với từ ngữ của mình và tránh sử dụng từ ngữ không phù hợp, đặc biệt khi trò chuyện với người lạ.",
        power : 5,
      },
      {
        description : "Tùy vào tình huống, nhưng tôi sẽ cố gắng làm cho mọi người cảm thấy thoải mái.",
        power : 4,
      },
      {
        description : "Chỉ là trò chuyện thôi, không có vấn đề gì phải lo lắng.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Bạn nghĩ sao về việc thảo luận về sức khỏe tâm thần và tình dục trong trường học?",
      power : 2,
    },
    playerCards : [
      {
        description : "Tôi nghĩ việc đó là cần thiết để giúp học sinh hiểu về bản thân và xây dựng mối quan hệ lành mạnh.",
        power : 4,
      },
      {
        description : "Có thể, nhưng phụ huynh nên chịu trách nhiệm hơn trong việc giáo dục về chủ đề này.",
        power : 2,
      },
      {
        description : "Tôi không muốn nói về những chủ đề như vậy.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Bạn có suy nghĩ gì về việc giới thiệu các kỹ năng tự bảo vệ và quản lý stress cho học sinh từ khi còn nhỏ?",
      power : 2,
    },
    playerCards : [
      {
        description : "Tôi nghĩ rằng việc giới thiệu các kỹ năng tự bảo vệ và quản lý stress từ khi còn nhỏ là rất tốt",
        power : 4,
      },
      {
        description : "Có thể, nhưng không phải tất cả mọi người đều cần những kỹ năng đó.",
        power : 1,
      },
      {
        description : "Tôi nghĩ đó là việc của bậc cha mẹ, không phải của trường học.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "Nếu bạn nhận ra bạn đang trải qua căng thẳng tâm lý, bạn sẽ làm gì để giải quyết tình hình đó?",
      power : 2,
    },
    playerCards : [
      {
        description : "Tôi sẽ tìm cách thư giãn và tìm người bạn tin tưởng để chia sẻ cảm xúc. Ngoài ra, tôi có thể tìm sự giúp đỡ từ chuyên gia tâm lý.",
        power : 4,
      },
      {
        description : "Tôi có thể thử thực hiện một số hoạt động thể chất để giảm căng thẳng.",
        power : 3,
      },
      {
        description : "Tôi sẽ giữ mọi thứ cho riêng mình và không nói cho ai biết về vấn đề của mình.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "Bạn biết cách nào để bảo vệ bản thân khỏi những nguy hiểm khi ở ngoài đường không?",
      power : 2,
    },
    playerCards : [
      {
        description : "Tôi sẽ không bao giờ đi cùng người lạ và luôn thông báo cho người lớn khi gặp phải tình huống khẩn cấp.",
        power : 4,
      },
      {
        description : "Tôi sẽ cố gắng tránh xa những người lạ và không đi một mình.",
        power : 3,
      },
      {
        description : "Tôi không biết.",
        power : 1,
      }
    ]
  }, 
  {
    hackerCard : {
      description :"Nếu có ai đó mời bạn đi cùng mà bạn không biết họ, bạn sẽ làm gì?",
      power : 2,
    },
    playerCards : [
      {
        description : "Tôi sẽ từ chối và đi tìm người lớn hoặc người thân để yêu cầu sự giúp đỡ.",
        power : 4,
      },
      {
        description : "Tôi có thể xem xét và hỏi họ là ai trước khi quyết định.",
        power : 3,
      },
      {
        description : "Tôi sẽ đi cùng họ.",
        power : 1,
      }
    ]
  }
];