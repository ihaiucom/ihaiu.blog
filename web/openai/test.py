# encoding: utf-8

# -*- coding: utf-8 -*
import openai
 
openai.api_key = "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"
 
prompt = "Hao Are You"
response = openai.Completion.create(
        engine="text-davinci-003", # 慢，模型大、能力强
        # engine="text-curie-001", # 较快
        # engine="text-babbage-001",
        # engine="text-ada-001", # 最快
        prompt=prompt,
        max_tokens=1024, # 编码长度
        n=1, # 候选答案数量
        temperature=1,
    )
for answer in response["choices"]:
    print(answer["text"])